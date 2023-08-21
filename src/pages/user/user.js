import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Upload,
    message,
    Progress,
    Button,
    Avatar,
    Typography,
  } from "antd";
  
  import { ToTopOutlined } from "@ant-design/icons";
  import { Link } from "react-router-dom";
  
  // Images
  import ava1 from "../../assets/images/logo-shopify.svg";
  import ava2 from "../../assets/images/logo-atlassian.svg";
  import ava3 from "../../assets/images/logo-slack.svg";
  import ava5 from "../../assets/images/logo-jira.svg";
  import ava6 from "../../assets/images/logo-invision.svg";
  import face from "../../assets/images/face-1.jpg";
  import face2 from "../../assets/images/face-2.jpg";
  import face3 from "../../assets/images/face-3.jpg";
  import face4 from "../../assets/images/face-4.jpg";
  import face5 from "../../assets/images/face-5.jpeg";
  import face6 from "../../assets/images/face-6.jpeg";
  import pencil from "../../assets/images/pencil.svg";
  import { getListUser } from "../../api/apiAccount";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { formatDate } from "../../utils/formatDate";
  
  const { Title } = Typography;

  // table code start
  const columns = [
    {
      
        title: "STT",
        dataIndex: "stt",
        key: "stt",
        width: "5%",
    },
    {
      title: "HỌ TÊN",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "MÔ TẢ",
      dataIndex: "describe",
      key: "describe",
    },
  
    {
      title: "TRẠNG THÁI",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "NGÀY SINH",
      key: "birthday",
      dataIndex: "birthday",
    },
  ];
  
  const data = [
    {
      key: "1",
      stt:'1',
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Manager</Title>
            <p>Organization</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "2",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face3}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Alexa Liras</Title>
              <p>alexa@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Programator</Title>
            <p>Developer</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/12/20</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "3",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Laure Perrier</Title>
              <p>laure@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Executive</Title>
            <p>Projects</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face4}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Miriam Eric</Title>
              <p>miriam@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Marketing</Title>
            <p>Organization</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "5",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face5}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Richard Gran</Title>
              <p>richard@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Manager</Title>
            <p>Organization</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/03/20</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "6",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face6}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>John Levi</Title>
              <p>john@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Tester</Title>
            <p>Developer</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>14/04/17</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  ];
  // project table start


  
const User=()=>{
  const [users,setUsers]=useState([])
  const {enqueueSnackbar}=useSnackbar()
  useEffect(()=>{
      const getData=async()=>{
        try{
          const data=await getListUser()
          setUsers(data)
        }
        catch(e){
          enqueueSnackbar("Lấy danh sách người dùng không thành công",{variant:"error"})
        }
        
      
      }
      getData()
      
    
  },[])

const data=users.map((user,index)=>{
  return {
    
      key: index,
      stt:index+1,
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{user.name}</Title>
              <p>vietha@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      describe: (
        <>
          <div className="author-info">
            <Title level={5}></Title>
            <p></p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            {user.status?"Active":"No Active"}
          </Button>
        </>
      ),
      birthday: (
        <>
          <div className="ant-employed">
            <span>{formatDate(user.brithday)}</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
      }
  
})
    return (
        <>
        <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="USER"
              extra={
                <>
                  <Radio.Group  defaultValue="a">
                    <Radio.Button value="a">All</Radio.Button>
                    <Radio.Button value="b">ONLINE</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>

      
          </Col>
        </Row>
      </div>
        </>
    )
}
export default User