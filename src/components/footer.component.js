import React from 'react';

export function Footer() {
    return (
        <footer className="Footer">
            <div className="text-gray-500 text-center p-4">
                {
                    process.env.REACT_APP_FOOTER_MESSAGE
                }
            </div>
        </footer>
    )
}