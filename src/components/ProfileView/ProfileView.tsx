import React from 'react';
import { Button } from 'antd';
import { ProfileViewProps } from './types';

const ProfileView: React.FC<ProfileViewProps> = (props: ProfileViewProps) => {
    const { signOut } = props;
    return (
        <div>
            Hello Profile
            <Button onClick={signOut}>SignOut</Button>
        </div>
    )
}

export default ProfileView;