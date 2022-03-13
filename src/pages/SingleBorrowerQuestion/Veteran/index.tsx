import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const Veteran: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title } = Typography;

    const [value, setValue] = useState(0)
    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    Let’s see if you qualify for special veteran programs.
                </Title>
                <div style={{ textAlign: 'center', marginTop:'40px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>I’m a Veteran</Radio>
                            <Radio value={1}>I’m Not a Veteran</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default Veteran;