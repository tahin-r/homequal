import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoCreditScore: React.FC = () => {
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
                    Your credit score plays a major role in both your approvability odds as well as the interest rate. What do you think your credit score is?
                </Title>
                <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
                    <Col xs={3}>Yours</Col>
                    <Col xs={3}>Jane's</Col>
                    <Col xs={18}></Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
                    <Col xs={4}>
                        <Radio.Group onChange={(e) => { setYourValue(e.target.value) }} value={yourValue}>
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
                    <Col xs={20}>
                        <Radio.Group onChange={(e) => { setCoValue(e.target.value) }} value={coValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}>Less than 500</Radio>
                                <Radio value={1}>500 - 580</Radio>
                                <Radio value={2}>580 - 620</Radio>
                                <Radio value={3}>620 - 680</Radio>
                                <Radio value={4}>680 - 720</Radio>
                                <Radio value={5}>Above 720</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                </Row>

                <Text italic>
                    If you are unsure, give us your best guess and we’ll figure it out later. Don’t worry if your score isn’t where you want it, we have strategies to help you improve yours fast.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>

            </Col>
        </Row>
    )
}

export default CoCreditScore;