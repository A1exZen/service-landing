import React, { createContext, useContext, useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUser = localStorage.getItem('currentUser');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const getUsers = () => {
		const storedUsers = localStorage.getItem('users');
		return storedUsers ? JSON.parse(storedUsers) : [];
	};

	const saveUsers = (users) => {
		localStorage.setItem('users', JSON.stringify(users));
	};

	const register = async (login, password) => {
		const users = getUsers();

		if (users.some((u) => u.login === login)) {
			throw new Error('Пользователь с таким логином уже существует.');
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const userData = { login, password: hashedPassword };

		users.push(userData);
		saveUsers(users);

		setUser(userData);
		localStorage.setItem('currentUser', JSON.stringify(userData));
	};

	const login = async (login, password) => {
		const users = getUsers();
		const userData = users.find((u) => u.login === login);

		if (userData) {
			const isMatch = bcrypt.compare(password, userData.password);
			if (isMatch) {
				setUser(userData);
				localStorage.setItem('currentUser', JSON.stringify(userData));
				return true;
			}
		}
		return false;
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem('currentUser');
		navigate('/');
	};

	return (
		<AuthContext.Provider value={{ user, register, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);