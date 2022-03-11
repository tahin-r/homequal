import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoEmployment: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    const [yourValue, setYourValue] = useState(0)
    const [coValue, setCoValue] = useState(0)
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
                <Row gutter={[16, 16]}>
                    <Col xs={2}>Yours</Col>
                    <Col xs={2}>Jane's</Col>
                    <Col xs={20}></Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col xs={2}>
                        <Radio.Group name='yours' onChange={(e) => { setYourValue(e.target.value) }} value={yourValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}></Radio>
                                <Radio value={1}></Radio>
                                <Radio value={2}></Radio>
                                <Radio value={3}></Radio>
                                <Radio value={4}></Radio>
                                <Radio value={5}></Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col xs={22}>
                        <Radio.Group name='cobuyer' onChange={(e) => { setCoValue(e.target.value)}} value={coValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}>Employment gaps in the past 24 months</Radio>
                                <Radio value={1}>Changed jobs in the past 12 months</Radio>
                                <Radio value={2}>I’m Self-employed</Radio>
                                <Radio value={3}>Cannot document my income</Radio>
                                <Radio value={4}>Receive commissions or bonus income</Radio>
                                <Radio value={5}>None of the above</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                </Row>
                <Text italic>
                    Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoEmployment;