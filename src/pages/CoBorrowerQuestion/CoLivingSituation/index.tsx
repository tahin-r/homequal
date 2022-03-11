import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space, Input } from 'antd';
import { Typography } from 'antd';

const CoLivingSituation: React.FC = () => {
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
                    Good work Dave, you’re almost done.
                </Title>
                <Title level={4}>
                    Now, let’s take a quick look at your current living situation…
                </Title>
                <div style={{ textAlign: 'center' }}>
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
                <Input placeholder='Enter Monthly Housing Payment' />
                <Title level={4}>
                    Jane’s current living situation is …
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Rents</Radio>
                            <Radio value={1}>Lives rent free</Radio>
                            <Radio value={2}>Owns a home</Radio>
                            <Radio value={2}>Lives with me</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Title level={4}>
                    Jane’s monthly housing payment is (only if does not live with you)
                </Title>
                <Input placeholder='Enter Monthly Housing Payment' />
                <Text italic>
                    Lenders will analyze your past 2 years living arrangements.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default CoLivingSituation;