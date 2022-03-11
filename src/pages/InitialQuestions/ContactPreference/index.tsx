import { useWizard } from 'react-use-wizard';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const ContactPreference: React.FC = () => {
  const { handleStep, nextStep, previousStep } = useWizard();
  const { Title, Text } = Typography;

  // Attach an optional handler
  handleStep(() => {

  });

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Title level={4}>
          Nice to meet you Dave. We will be sending you information you request, specifics about your purchasing ability, and home buying tips.
        </Title>
        <Title level={4}>
          How would you prefer we contact you?
        </Title>
        <div style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              style={{ color: '#000', borderColor: '#ff1a8c', borderRadius:'10px', marginTop: '20px' }}
              onClick={() => nextStep()}
              block
              ghost>
              Text Me
            </Button>
            <Button
              type="primary"
              style={{ color: '#000', borderColor: '#ff1a8c', borderRadius:'10px', marginTop: '20px' }}
              onClick={() => nextStep()}
              block
              ghost>
              Email Me
            </Button>
          </div>
        <Text>
          You will receive a message shortly to confirm your contact information along with your member account access instructions.
        </Text>
        <Button onClick={() => previousStep()}>Previous</Button>
      </Col>
    </Row>
  )
}

export default ContactPreference;