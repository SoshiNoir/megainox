// Global declarations for importing CSS/SCSS files and modules
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';

// Allow importing plain images if needed (optional)
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';

// Fallback for any other unknown module types
declare module '*';
