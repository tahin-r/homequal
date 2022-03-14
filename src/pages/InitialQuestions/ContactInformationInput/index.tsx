import { useWizard } from 'react-use-wizard';
import { Form, Input, Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const ContactInformationInput: React.FC = () => {
  const { handleStep, nextStep } = useWizard();
  const { Title, Text } = Typography;

  // Attach an optional handler
  handleStep(() => {

  });

  const onFinish = () => {
    nextStep();
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Form
          className="contact-info-input"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{padding:'20px'}}
        >
          <Title level={4}>
            Hi, who do I have the pleasure of speaking with?
          </Title>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: 'Please input your First Name!' }]}
          >
            <Input placeholder="First Name" style={{backgroundColor: '#e6e6e6', color:'#000'}}/>
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Please input your Last Name!' }]}
          >
            <Input placeholder="Last Name" style={{backgroundColor: '#e6e6e6', color:'#000'}}/>
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },]}
          >
            <Input placeholder="Email" style={{backgroundColor: '#e6e6e6', color:'#000'}}/>
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Mobile" style={{backgroundColor: '#e6e6e6', color:'#000'}}/>
          </Form.Item>
          <Text italic style={{marginTop: '20px'}}>
            Home<Text style={{ color: '#ff4da6' }}>Qual</Text> believes that it takes a team to meet your goals. By providing your contact information, you are giving us permission to contact you in order to help you with your home ownership goals. If, at any time, you would like to opt-out, please let us know by using the opt-out button on your profile page.
          </Text>
          <div style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width:'70%', color: '#000', borderColor: '#ff1a8c', borderRadius:'10px', marginTop: '20px', maxWidth:'250px' }}
              size='large'
              ghost>
              Continue
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default ContactInformationInput;