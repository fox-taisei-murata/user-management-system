// components/parts/CustomButton.tsx

import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    variantType?: 'primary' | 'secondary' | 'danger';
}


const CustomButton: React.FC<CustomButtonProps> = ({ variantType = 'primary', ...props }) => {
    let color: ButtonProps['color'] = 'primary';

    // TODO: variantTypeに応じてcolorを変化させる
    // colorに設定する色は調べて実装する

    if (variantType === 'primary') {
        color = 'primary';  
    } else if (variantType === 'secondary') {
        color = 'secondary'; 
    } else if (variantType === 'danger') {
        color = 'error'; 
    }
    


    return (
        <Button color={color} variant="contained" {...props} >{props.children} </Button>
    );  // TODO: <Button>の実装
    // プロップスには[color][variant]を設定し、{...props}を最後に設定する
}

export default CustomButton;