import {useState} from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoBuyerOption: React.FC = () => {
  const { handleStep, nextStep, previousStep } = useWizard();
  const { Title, Text } = Typography;

  const [value, setValue] = useState(0)
  // Attach an optional handler
  handleStep(() => {

  });

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Title level={4}>
          Let’s get started!
        </Title>
        <Title level={4}>
          Who will be on the loan application with you?
        </Title>
        <div style={{ textAlign: 'center' }}>
          <Radio.Group onChange={(e)=>{setValue(e.target.value); nextStep()}} value={value}>
            <Space direction="vertical" align="start">
              <Radio value={0}>Just Me</Radio>
              <Radio value={1}>My Spouse</Radio>
              <Radio value={2}>Someone Else</Radio>
            </Space>
          </Radio.Group>
        </div>
        <Text italic>
          This isn’t who will be living in your new home, but who will be on the mortgage with you.
        </Text>
        <Button onClick={() => previousStep()}>Previous</Button>
      </Col>
    </Row>
  )
}

export default CoBuyerOption;