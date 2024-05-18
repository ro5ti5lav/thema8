
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const AddTodoModal = forwardRef(({ onAdd }, ref) => {
    const [title, setTitle] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    const handleAdd = () => {
        if (title.trim()) {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        isOpen && (
            <div className="modal">
                <div className="modal-content">
                    <h2>Добавить задачу</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={() => setIsOpen(false)}>Отмена</button>
                    <button onClick={handleAdd}>Добавить</button>
                </div>
            </div>
        )
    );
});

export default AddTodoModal;
