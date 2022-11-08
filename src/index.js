import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import Posts from './components/Posts'
import ContentProvider from './components/Context';
import PostPage from './components/PostPage'
import Profile from './components/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContentProvider>
        <BrowserRouter>
            <Routes>

                <Route element={<LoginLayout />}>
                    <Route path='/' element={<App />} />
                </Route>
                <Route element={<UserLayout />}>
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/posts/:id' element={<PostPage />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    </ContentProvider>
);