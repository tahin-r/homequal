import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoEmployment: React.FC = () => {
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
                    Lenders will analyze your employment history.
                </Title>
                <Title level={4}>
                    Check any below that apply to you.
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Employment gaps in the past 24 months</Radio>
                            <Radio value={1}>Changed jobs in the past 12 months</Radio>
                            <Radio value={2}>I’m Self-employed</Radio>
                            <Radio value={3}>Cannot document my income</Radio>
                            <Radio value={4}>Receive commissions or bonus income</Radio>
                            <Radio value={5}>None of the above</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Text italic>
                    Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default CoEmployment;