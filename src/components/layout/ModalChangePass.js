import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import {  Checkbox, Form, Input } from 'antd';
import {
    SearchOutlined,
    StarOutlined,
    TwitterOutlined,
    FacebookFilled,
    LoginOutlined,
    QuestionCircleOutlined
  } from "@ant-design/icons";

import {ChangePass} from '../../api/apiAccount'
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
const ModalChangePass= (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error,setError]=useState('')

  const showModal = () => {
    setIsModalOpen(true);
   
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const {enqueueSnackbar}=useSnackbar()
  const user=useSelector(state=>state.userReducer.data)
  const handleChangePass=async(values)=>{
    const data={
      id:user.id,
      pass:values.pass,
      newpass:values.newpass,
      renewpass:values.renewpass
    }

    try {
      if(data.pass!=user.password){
          setError('Sai thông tin mật khẩu')
      }
      else if(data.newpass!=data.renewpass) {
        setError('Mật khẩu mới không khớp')
      }
      else {
      const res=await ChangePass(data)
      setError('')
      enqueueSnackbar("Đổi mật khẩu thành công", {variant:'success'})
      }
    } catch (error) {
      enqueueSnackbar("Đổi mật khẩu không thành công", {variant:'error'})
      
    }

  }
  useEffect(()=>{

  },[error])

  return (
    <>
      <Button icon={<QuestionCircleOutlined />} type="" onClick={showModal}>
        Đổi mật khẩu
      </Button> 
      <Modal title="Đổi mật khẩu" visible={isModalOpen}  footer={null} onCancel={handleCancel}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={handleChangePass}
              autoComplete="off"
           
        >           
            <Form.Item
              label="Mật khẩu"
              name="pass"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="newpass"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>
            <Form.Item
              label="Nhập lại mật khẩu mới"
              name="renewpass"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
            <Input.Password />
            </Form.Item>
            <p style={{color:'red'}}>{error}</p>


            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
            <Checkbox>Nhớ mật khẩu</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
          </Form>
      </Modal>
    </>
  );
};

export default ModalChangePass;