import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CreditScore: React.FC = () => {
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
                    Your credit score plays a major role in both your approvability odds as well as the interest rate. What do you think your credit score is?
                </Title>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Less than 500</Radio>
                            <Radio value={1}>500 - 580</Radio>
                            <Radio value={3}>580 - 620</Radio>
                            <Radio value={4}>620 - 680</Radio>
                            <Radio value={5}>680 - 720</Radio>
                            <Radio value={6}>Above 720</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Text italic>
                    If you are unsure, give us your best guess and we’ll figure it out later. Don’t worry if your score isn’t where you want it, we have strategies to help you improve yours fast.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default CreditScore;