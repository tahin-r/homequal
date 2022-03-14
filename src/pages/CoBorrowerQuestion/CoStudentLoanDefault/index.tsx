import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoStudentLoanDefault: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    const [yourValue, setYourValue] = useState(0)
    const [coValue, setCoValue] = useState(0)
    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    Are any of your student loans in default?
                </Title>
                <Row gutter={[16, 16]} style={{ marginBottom: '10px', marginTop: '20px' }}>
                    <Col xs={3}>You</Col>
                    <Col xs={3}>Jane</Col>
                    <Col xs={18}></Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: '150px' }}>
                    <Col xs={3}>
                        <Radio.Group onChange={(e) => { setYourValue(e.target.value) }} value={yourValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}></Radio>
                                <Radio value={1}></Radio>
                                <Radio value={2}></Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col xs={21}>
                        <Radio.Group onChange={(e) => { setCoValue(e.target.value) }} value={coValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}>Yes</Radio>
                                <Radio value={1}>Yes, but on remediation plan</Radio>
                                <Radio value={2}>No</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                </Row>
                <Text italic>
                    This will help us further refine your Success Plan.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoStudentLoanDefault;