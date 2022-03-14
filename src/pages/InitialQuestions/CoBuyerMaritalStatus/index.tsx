import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoBuyerMaritalStatus: React.FC = () => {
  const { handleStep, nextStep, previousStep } = useWizard();
  const { Title } = Typography;
  const [value, setValue] = useState(0)

  // Attach an optional handler
  handleStep(() => {
  });

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col>
        <Title level={4}>
          What is Jane's marital status?
        </Title>
        <div style={{ textAlign: 'center' }}>
          <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
            <Space direction="vertical" align="start">
              <Radio value={0}>Married</Radio>
              <Radio value={1}>Not married</Radio>
              <Radio value={2}>Separated</Radio>
            </Space>
          </Radio.Group>
        </div>

        <Button onClick={() => previousStep()}>Previous</Button>
        <Button onClick={() => nextStep()}>Next</Button>
      </Col>
    </Row>
  )
}

export default CoBuyerMaritalStatus;