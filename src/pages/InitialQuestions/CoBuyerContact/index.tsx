import { useWizard } from 'react-use-wizard';
import { Form, Input, Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const CoBuyerContact: React.FC = () => {
  const { handleStep, nextStep } = useWizard();
  const { Title } = Typography;

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
          name="contact_info_input"
          className="contact-info-input"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Title level={4}>
          Who will be on the loan with you?
          </Title>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: 'Please input your First Name!' }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Please input your Last Name!' }]}
          >
            <Input placeholder="Last Name" />
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
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input placeholder="Mobile" />
          </Form.Item>
      
          <div style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ color: '#000', borderColor: '#ff1a8c', borderRadius:'5px', marginTop: '20px' }}
              ghost>
              Continue
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default CoBuyerContact;