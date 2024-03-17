import React from 'react';
type MessageType = {
    message: string
}
export const Message = ({message, ...restProps}: MessageType) => {
    return (
        <div>
            <span>{message}</span>
        </div>
    );
};