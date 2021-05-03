import React from 'react';
interface SelectionProps {
    type: 'switch' | 'toggle' | 'activeInactive';
    checked?: boolean;
    onChange?: () => void;
    size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
    disabled?: boolean;
    selectionRef?: any;
}
declare const Selection: React.FC<SelectionProps>;
export default Selection;
