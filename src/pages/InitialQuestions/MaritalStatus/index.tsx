import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const MaritalStatus: React.FC = () => {
  const { handleStep, nextStep, previousStep } = useWizard();
  const { Title } = Typography;
  const [value, setValue] = useState(0)

  // Attach an optional handler
  handleStep(() => {
  });

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col style={{padding:'20px'}}>
        <Title level={4}>
          In order to determine what types of loans you may qualify for, we'll need to know your marital status.
        </Title>
        <div style={{ textAlign: 'center' }}>
          <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
            <Space direction="vertical" align="start">
              <Radio value={0}>I'm married</Radio>
              <Radio value={1}>I'm not married</Radio>
              <Radio value={2}>I'm separated</Radio>
            </Space>
          </Radio.Group>
        </div>

        <Button onClick={() => previousStep()}>Previous</Button>
        <Button onClick={() => nextStep()}>Next</Button>
      </Col>
    </Row>
  )
}

export default MaritalStatus;