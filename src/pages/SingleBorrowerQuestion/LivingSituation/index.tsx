import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space, Input } from 'antd';
import { Typography } from 'antd';

const LivingSituation: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    const [value, setValue] = useState(0)
    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    Good work Dave, you’re almost done.
                </Title>
                <Title level={4}>
                    Now, let’s take a quick look at your current living situation…
                </Title>
                <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>I rent</Radio>
                            <Radio value={1}>I live rent free</Radio>
                            <Radio value={2}>I own a home</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Title level={4}>
                    My monthly housing payment is
                </Title>
                <Input placeholder='Enter Monthly Housing Payment' style={{ marginTop: '30px', marginBottom: '30px', backgroundColor: '#e6e6e6', color:'#000' }} />
                <Text italic>
                    Lenders will analyze your past 2 years living arrangements.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default LivingSituation;