import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const StudentLoanDefault: React.FC = () => {
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
                    Are any of your student loans in default?
                </Title>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '150px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Yes</Radio>
                            <Radio value={1}>Yes, but on remediation plan</Radio>
                            <Radio value={2}>No</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Text italic>
                    This will help us further refine your Success Plan.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
            </Col>
        </Row>
    )
}

export default StudentLoanDefault;