import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoPaymentHistory: React.FC = () => {
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
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>
                        Lenders pay close attention to items on your report as well.
                    </Title>
                    <Title level={4}>
                        Check any that apply.
                    </Title>
                </div>

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
                                <Radio value={6}></Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col xs={20}>
                        <Radio.Group onChange={(e) => { setCoValue(e.target.value) }} value={coValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}>Late payments in last 12 months</Radio>
                                <Radio value={1}>Collections in last 12 months</Radio>
                                <Radio value={2}>Late student loan payments</Radio>
                                <Radio value={3}>Late housing or lease payments</Radio>
                                <Radio value={4}>Any tax liens, judgements, or foreclosures in the past 4 years</Radio>
                                <Radio value={5}>Bankruptcy in the past 2 years</Radio>
                                <Radio value={6}>Not current on filing taxes</Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                </Row>
                <Text italic>
                    By asking, we can customize your Success Plan to address any of these.
                </Text>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoPaymentHistory;