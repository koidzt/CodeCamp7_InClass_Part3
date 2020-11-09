import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Button, Divider, Table, List, Form, Input } from 'antd';
import {
  VerticalRightOutlined,
  DoubleLeftOutlined,
  BackwardOutlined,
  PlayCircleOutlined,
  PauseOutlined,
  ForwardOutlined,
  DoubleRightOutlined,
  VerticalLeftOutlined,
} from '@ant-design/icons';
import Counter from './pages/CounterPage';
import ClockPage from './pages/ClockPage';
import Carousel from './pages/CarouselPage';

// react-router-dom
function App() {
  return (
    <div className="App" >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/carousel" component={Carousel} />
        <Route path="/clock" component={ClockPage} />
        <Route path="/counter" component={Counter} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}


// Form
// function App() {
//   const onFinish = values => {
//     console.log(values);
//   };

//   return (
//     <div className="App" >
//       <Form onFinish={onFinish} style={{ width: "50%" }}>
//         <Form.Item
//           name="email"
//           label="E-mail"
//           rules={[
//             {
//               required: true,
//               message: "Please input your E-mail!"
//             },
//             {
//               type: "email",
//               message: "The input is not valid E-mail!"
//             }
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="username"
//           label="Username"
//           rules={[
//             {
//               max: 26,
//               message: "ใส่ได้ไม่เกิน 26 ตัว"
//             },
//             {
//               min: 6,
//               message: "ต้องใส่อย่างน้อย 6 ตัว"
//             },
//             {
//               required: true,
//               message: "กรุณาใส่ username"
//             }
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="password"
//           label="Password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your Password!"
//             }
//           ]}
//         >
//           <Input type="password" />
//         </Form.Item>
//         <Form.Item
//           name="confirm"
//           label="Confirm Password"
//           dependencies={['password']}
//           rules={[
//             {
//               required: true,
//               message: "Please confirm your password!"
//             },
//             ({ getFieldValue }) => ({
//               validator(rule, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject('The two passwords that you entered do not match!');
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>
//         <Button htmlType="submit">Submit</Button>
//       </Form>
//     </div>
//   )
// }


// Table
// function App() {
//   const data = [
//     {
//       "name": "Axel Michael",
//       "birthday": "2727-0202-21212121",
//       "company": "Lacinia Corp.",
//       "phoneNumber": "16420502 -5655"
//     },
//     {
//       "name": "Whitney Spears",
//       "birthday": "2323-0606-21212121",
//       "company": "Non Vestibulum Consulting",
//       "phoneNumber": "16491016 -6802"
//     },
//     {
//       "name": "Yen Holman",
//       "birthday": "1717-0505-20202020",
//       "company": "Convallis Dolor Quisque Institute",
//       "phoneNumber": "16370812 -5558"
//     },
//     {
//       "name": "Dominic Davidson",
//       "birthday": "2525-0707-21212121",
//       "company": "Eget Company",
//       "phoneNumber": "16100222 -1578"
//     },
//     {
//       "name": "Allegra Sweeney",
//       "birthday": "0101-0909-21212121",
//       "company": "Cursus Et Eros Incorporated",
//       "phoneNumber": "16051018 -3510"
//     },
//     {
//       "name": "Emma English",
//       "birthday": "1313-0505-21212121",
//       "company": "Integer Vitae Corporation",
//       "phoneNumber": "16420606 -1824"
//     },
//     {
//       "name": "Elmo Hughes",
//       "birthday": "0303-0808-21212121",
//       "company": "Semper Auctor LLP",
//       "phoneNumber": "16470618 -5248"
//     },
//     {
//       "name": "Dustin Fowler",
//       "birthday": "1212-1010-20202020",
//       "company": "Malesuada Company",
//       "phoneNumber": "16411217 -4042"
//     },
//     {
//       "name": "Jesse Carpenter",
//       "birthday": "2727-0808-20202020",
//       "company": "Lorem Luctus Ut LLC",
//       "phoneNumber": "16940123 -5255"
//     },
//     {
//       "name": "Eden Mccray",
//       "birthday": "1212-0909-20202020",
//       "company": "Leo Corporation",
//       "phoneNumber": "16601022 -4845"
//     },
//     {
//       "name": "Abdul Hull",
//       "birthday": "2828-0808-20202020",
//       "company": "Sed Sapien Institute",
//       "phoneNumber": "16030429 -4531"
//     },
//     {
//       "name": "Kylee Patrick",
//       "birthday": "1818-0707-21212121",
//       "company": "A Incorporated",
//       "phoneNumber": "16961214 -6036"
//     },
//     {
//       "name": "Hasad Hines",
//       "birthday": "1818-1010-20202020",
//       "company": "Ultrices Foundation",
//       "phoneNumber": "16980719 -4791"
//     },
//     {
//       "name": "Rooney Middleton",
//       "birthday": "0404-1010-21212121",
//       "company": "Nullam Associates",
//       "phoneNumber": "16211109 -9806"
//     },
//     {
//       "name": "Avram Schroeder",
//       "birthday": "0606-0707-21212121",
//       "company": "Orci Quis LLC",
//       "phoneNumber": "16720320 -4131"
//     },
//     {
//       "name": "Lila Spence",
//       "birthday": "0707-1111-19191919",
//       "company": "Mollis Vitae Posuere Corporation",
//       "phoneNumber": "16500713 -4967"
//     },
//     {
//       "name": "Wendy Dickerson",
//       "birthday": "0505-0404-20202020",
//       "company": "Diam Duis Mi Institute",
//       "phoneNumber": "16790110 -2512"
//     },
//     {
//       "name": "Sebastian Lloyd",
//       "birthday": "0808-0202-20202020",
//       "company": "Luctus Sit LLP",
//       "phoneNumber": "16220505 -6761"
//     },
//     {
//       "name": "Miriam Reyes",
//       "birthday": "1717-0909-21212121",
//       "company": "Semper Consulting",
//       "phoneNumber": "16181230 -0299"
//     },
//     {
//       "name": "Kaye Norman",
//       "birthday": "1212-1212-19191919",
//       "company": "In Consequat Industries",
//       "phoneNumber": "16590222 -7536"
//     },
//     {
//       "name": "Alan Park",
//       "birthday": "0505-0505-20202020",
//       "company": "Sed Nulla Institute",
//       "phoneNumber": "16770909 -3244"
//     },
//     {
//       "name": "Katelyn Wiley",
//       "birthday": "2222-0505-21212121",
//       "company": "Nulla Industries",
//       "phoneNumber": "16900518 -7357"
//     },
//     {
//       "name": "Adam Erickson",
//       "birthday": "0101-1111-20202020",
//       "company": "Parturient Montes Associates",
//       "phoneNumber": "16510402 -4129"
//     },
//     {
//       "name": "Xanthus Frank",
//       "birthday": "2626-0808-20202020",
//       "company": "Vivamus Associates",
//       "phoneNumber": "16891122 -9386"
//     },
//     {
//       "name": "Ella Chandler",
//       "birthday": "2020-0303-20202020",
//       "company": "Lobortis Incorporated",
//       "phoneNumber": "16961106 -6037"
//     },
//     {
//       "name": "Anika Burns",
//       "birthday": "1818-0909-21212121",
//       "company": "Dignissim LLP",
//       "phoneNumber": "16740411 -3784"
//     },
//     {
//       "name": "Cedric Blevins",
//       "birthday": "0303-0808-20202020",
//       "company": "Ante Incorporated",
//       "phoneNumber": "16690525 -5441"
//     },
//     {
//       "name": "Warren Garrison",
//       "birthday": "2020-0909-20202020",
//       "company": "Nec Eleifend Non LLC",
//       "phoneNumber": "16650603 -4575"
//     },
//     {
//       "name": "Gage Harrell",
//       "birthday": "0707-0505-21212121",
//       "company": "Rutrum Non Ltd",
//       "phoneNumber": "16550409 -6362"
//     },
//     {
//       "name": "Ian Mendoza",
//       "birthday": "0404-0808-21212121",
//       "company": "Dolor Company",
//       "phoneNumber": "16800329 -8299"
//     },
//     {
//       "name": "Laith Langley",
//       "birthday": "1717-0404-21212121",
//       "company": "Tellus Eu Corp.",
//       "phoneNumber": "16690320 -7725"
//     },
//     {
//       "name": "Hermione Diaz",
//       "birthday": "1818-0909-21212121",
//       "company": "Amet Consectetuer Industries",
//       "phoneNumber": "16220711 -4899"
//     },
//     {
//       "name": "Inez Nicholson",
//       "birthday": "1212-0606-21212121",
//       "company": "Sed Corp.",
//       "phoneNumber": "16001217 -0429"
//     },
//     {
//       "name": "Yen Bright",
//       "birthday": "0606-0202-21212121",
//       "company": "Sed Dictum Corp.",
//       "phoneNumber": "16150528 -3000"
//     },
//     {
//       "name": "Francesca Atkinson",
//       "birthday": "0404-1212-19191919",
//       "company": "Aliquam Arcu Aliquam Institute",
//       "phoneNumber": "16450116 -5783"
//     },
//     {
//       "name": "Sawyer Woodard",
//       "birthday": "0404-0202-20202020",
//       "company": "Elementum Sem Vitae Consulting",
//       "phoneNumber": "16810322 -5242"
//     },
//     {
//       "name": "Octavius Perry",
//       "birthday": "0909-1111-20202020",
//       "company": "Et Libero Proin Associates",
//       "phoneNumber": "16501204 -8152"
//     },
//     {
//       "name": "Ahmed Moreno",
//       "birthday": "2222-0404-21212121",
//       "company": "Lectus Nullam Institute",
//       "phoneNumber": "16761030 -6834"
//     },
//     {
//       "name": "Jackson Fuentes",
//       "birthday": "0303-0303-20202020",
//       "company": "Sem Semper Ltd",
//       "phoneNumber": "16010803 -1949"
//     },
//     {
//       "name": "Desiree Galloway",
//       "birthday": "1717-0606-21212121",
//       "company": "Lobortis Nisi Nibh Corp.",
//       "phoneNumber": "16690722 -7141"
//     },
//     {
//       "name": "Daquan Riley",
//       "birthday": "2121-0909-20202020",
//       "company": "Sit Amet Luctus LLC",
//       "phoneNumber": "16330411 -8221"
//     },
//     {
//       "name": "Guinevere Beasley",
//       "birthday": "0202-0101-20202020",
//       "company": "Eu Accumsan Sed Corporation",
//       "phoneNumber": "16100808 -0523"
//     },
//     {
//       "name": "Timon Leblanc",
//       "birthday": "1818-1111-20202020",
//       "company": "Non Ante Bibendum Consulting",
//       "phoneNumber": "16410825 -1192"
//     },
//     {
//       "name": "Imogene Blackwell",
//       "birthday": "2020-0909-20202020",
//       "company": "Neque Et Nunc Incorporated",
//       "phoneNumber": "16170926 -4517"
//     },
//     {
//       "name": "Althea Davenport",
//       "birthday": "0606-0606-21212121",
//       "company": "Erat Volutpat Corporation",
//       "phoneNumber": "16730823 -4876"
//     },
//     {
//       "name": "Nelle Rowe",
//       "birthday": "0505-0404-20202020",
//       "company": "Sociis Natoque Inc.",
//       "phoneNumber": "16060306 -9824"
//     },
//     {
//       "name": "Brielle Suarez",
//       "birthday": "2020-0101-21212121",
//       "company": "Amet Inc.",
//       "phoneNumber": "16871219 -2320"
//     },
//     {
//       "name": "Alden Quinn",
//       "birthday": "0707-0101-21212121",
//       "company": "Phasellus Ornare Institute",
//       "phoneNumber": "16560904 -4655"
//     },
//     {
//       "name": "Alan Patrick",
//       "birthday": "0303-0303-20202020",
//       "company": "Mauris Eu Consulting",
//       "phoneNumber": "16030729 -1336"
//     },
//     {
//       "name": "Joy Neal",
//       "birthday": "1010-0606-20202020",
//       "company": "Duis Volutpat Institute",
//       "phoneNumber": "16110607 -7702"
//     },
//     {
//       "name": "Ginger Calhoun",
//       "birthday": "1010-0606-20202020",
//       "company": "Neque Venenatis Lacus Company",
//       "phoneNumber": "16720208 -8717"
//     },
//     {
//       "name": "Melvin Fry",
//       "birthday": "0909-0606-20202020",
//       "company": "Aliquam Institute",
//       "phoneNumber": "16311014 -4262"
//     },
//     {
//       "name": "Constance Griffin",
//       "birthday": "1717-1111-20202020",
//       "company": "Dui Lectus Rutrum LLC",
//       "phoneNumber": "16650704 -1199"
//     },
//     {
//       "name": "Ishmael Morrow",
//       "birthday": "2727-0303-20202020",
//       "company": "Et Tristique Associates",
//       "phoneNumber": "16461214 -3638"
//     },
//     {
//       "name": "Merritt Pearson",
//       "birthday": "1717-1212-20202020",
//       "company": "Turpis Egestas Industries",
//       "phoneNumber": "16521106 -1998"
//     },
//     {
//       "name": "Blossom Wynn",
//       "birthday": "3131-0808-20202020",
//       "company": "Sit Ltd",
//       "phoneNumber": "16570114 -3801"
//     },
//     {
//       "name": "Zeus Allen",
//       "birthday": "2222-0707-21212121",
//       "company": "Proin Non Foundation",
//       "phoneNumber": "16090611 -3386"
//     },
//     {
//       "name": "Troy Daniel",
//       "birthday": "2929-0303-20202020",
//       "company": "Odio Semper Cursus Ltd",
//       "phoneNumber": "16490820 -5695"
//     },
//     {
//       "name": "Evelyn Mullins",
//       "birthday": "3030-0707-20202020",
//       "company": "Nec Corporation",
//       "phoneNumber": "16510828 -0347"
//     },
//     {
//       "name": "Tamara Sweet",
//       "birthday": "2626-0606-20202020",
//       "company": "Quisque Institute",
//       "phoneNumber": "16930216 -2111"
//     },
//     {
//       "name": "Ryan Noble",
//       "birthday": "0606-0505-20202020",
//       "company": "Convallis In Foundation",
//       "phoneNumber": "16031110 -2032"
//     },
//     {
//       "name": "Jared Wood",
//       "birthday": "0707-0707-20202020",
//       "company": "Metus LLC",
//       "phoneNumber": "16441103 -8260"
//     },
//     {
//       "name": "Ila Casey",
//       "birthday": "1616-1111-20202020",
//       "company": "Nunc Nulla Ltd",
//       "phoneNumber": "16731101 -2756"
//     },
//     {
//       "name": "Joy Dudley",
//       "birthday": "2828-1212-19191919",
//       "company": "Dolor Corporation",
//       "phoneNumber": "16091216 -2526"
//     },
//     {
//       "name": "Lael Mcgee",
//       "birthday": "0707-0606-21212121",
//       "company": "Massa Lobortis PC",
//       "phoneNumber": "16861202 -0100"
//     },
//     {
//       "name": "Sawyer Dudley",
//       "birthday": "0101-1212-19191919",
//       "company": "Vivamus Sit Industries",
//       "phoneNumber": "16120615 -6109"
//     },
//     {
//       "name": "Rhea Reed",
//       "birthday": "1818-0202-21212121",
//       "company": "Posuere Cubilia Curae; LLP",
//       "phoneNumber": "16991107 -5936"
//     },
//     {
//       "name": "Dustin Hopper",
//       "birthday": "1212-0101-21212121",
//       "company": "Tincidunt Nunc Ac LLP",
//       "phoneNumber": "16220821 -9101"
//     },
//     {
//       "name": "Jack Lynn",
//       "birthday": "0101-0202-20202020",
//       "company": "Pellentesque Tincidunt Tempus LLP",
//       "phoneNumber": "16930517 -7025"
//     },
//     {
//       "name": "Lee Elliott",
//       "birthday": "2525-0909-21212121",
//       "company": "Ullamcorper Viverra Maecenas Foundation",
//       "phoneNumber": "16620911 -7594"
//     },
//   ];

//   const columns = [
//     {
//       title: 'Full Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Birthday',
//       dataIndex: 'birthday',
//       key: 'birthday',
//     },
//     {
//       title: 'Company',
//       dataIndex: 'company',
//       key: 'company',
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phoneNumber',
//       key: 'phoneNumber',
//     },
//     {
//       title: 'Name(Company)',
//       render: (text, record) => <p>{`${record.name} (${record.company})`}</p>
//     },
//   ];

//   return (
//     <div className="App" >
//       <Table dataSource={data} columns={columns} />

//     </div >
//   );
// }


// List
// function App() {
//   const data = [
//     'Os',
//     'Nat',
//     'Aom',
//     'Jui',
//     'Poh',
//     'Pee',
//     'TOEY',
//     'Jump',
//     'Prince',
//     'Koi',
//     'AU',
//     'Ball',
//     'Jeeno',
//     'Cake',
//     'Pee',
//     'Paan',
//     'Jay',
//     'Pup',
//     'Peter',
//     'Zen',
//     'Tawan',
//     'Earth',
//     'Pom',
//     'Bank'
//   ];
//   return (
//     <div className="App" >
//       <>
//         <Divider orientation="left">Default Size</Divider>
//         <List
//           header={<div>Header</div>}
//           footer={<div>Footer</div>}
//           bordered
//           dataSource={data}
//           renderItem={item => (
//             <p>{item}</p>
//           )}
//         />
//       </>
//     </div>
//   );
// }

export default App;
