import React from 'react';
import { Row, Col, AutoComplete, Dropdown, Menu, Button } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { ProfileViewProps } from './types';
import './Navbar.scss';

const ProfileView: React.FC<ProfileViewProps> = (props) => {
    const { signOut } = props;
    return (
        <div>
            <header>
                <Row>
                    <Col xs={{ span: 5 }} lg={{ span: 4 }} flex='none'>
                        <h2 style={{ margin: '0 50px' }}>Geekinsider</h2>
                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} lg={{ span: 15, offset: 1 }}>
                        <AutoComplete
                            style={{ width: '100%' }}
                            options={[
                                { value: 'Burns Bay Road' },
                                { value: 'Downing Street' },
                                { value: 'Wall Street' },
                            ]}
                            placeholder="Search tech stack, company"
                            filterOption={(inputValue, option) =>
                                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                        />
                    </Col>
                    <Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <div style={{ display: 'flex' }}>
                            <Dropdown 
                                trigger={['click']}
                                overlay={
                                    <Menu>
                                        <Menu.Item>
                                            <h2>Success</h2>
                                            <span>some description that you've notified for something</span>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <h2>Success</h2>
                                            <span>some description that you've notified for something</span>
                                        </Menu.Item>
                                    </Menu>
                                } 
                                placement="bottomRight" 
                                arrow
                            >
                                <Button 
                                    shape="circle" 
                                    size="large" 
                                    icon={<BellOutlined />} 
                                    style={{
                                        marginRight: '5px'
                                    }}
                                />
                            </Dropdown>
                            <Dropdown 
                                trigger={['click']}
                                overlay={
                                    <Menu>
                                        <Menu.Item>
                                            Profile
                                        </Menu.Item>
                                        <Menu.Item>
                                            Account Settings
                                        </Menu.Item>
                                        <Menu.Item onClick={signOut}>
                                            Logout
                                        </Menu.Item>
                                    </Menu>
                                } 
                                placement="bottomRight" 
                                arrow
                            >
                                <Button shape="circle" size="large" icon={<UserOutlined />} />
                            </Dropdown>
                        </div>
                    </Col>
                    {/*<Col span={6} style={{ textAlign: 'center' }}>
                        <h2>Geekinsider</h2>
                    </Col>
                    <Col span={18}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <AutoComplete
                                style={{ width: '90%' }}
                                options={[
                                    { value: 'Burns Bay Road' },
                                    { value: 'Downing Street' },
                                    { value: 'Wall Street' },
                                ]}
                                placeholder="Search tech stack, company"
                                filterOption={(inputValue, option) =>
                                    option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                }
                            />

                            <div style={{ display: 'flex' }}>
                                <Dropdown 
                                    trigger={['click']}
                                    overlay={
                                        <Menu>
                                            <Menu.Item>
                                                <h2>Success</h2>
                                                <span>some description that you've notified for something</span>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <h2>Success</h2>
                                                <span>some description that you've notified for something</span>
                                            </Menu.Item>
                                        </Menu>
                                    } 
                                    placement="bottomRight" 
                                    arrow
                                >
                                    <Button shape="circle" size="large" icon={<BellOutlined />} />
                                </Dropdown>
                                <Dropdown 
                                    trigger={['click']}
                                    overlay={
                                        <Menu>
                                            <Menu.Item>
                                                Profile
                                            </Menu.Item>
                                            <Menu.Item>
                                                Account Settings
                                            </Menu.Item>
                                            <Menu.Item onClick={signOut}>
                                                Logout
                                            </Menu.Item>
                                        </Menu>
                                    } 
                                    placement="bottomRight" 
                                    arrow
                                >
                                    <Button shape="circle" size="large" icon={<UserOutlined />} />
                                </Dropdown>
                            </div>
                        </div>
                    </Col>*/}
                </Row>
            </header>
        </div>
    )
}

export default ProfileView;
