import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoLienJudgement: React.FC = () => {
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
                <div style={{ marginLeft: '10px' }}>
                    <Title level={4}>
                        You said you had a tax lien, judgement or foreclosure.
                    </Title>
                    <Title level={4}>
                        Please check all that apply.
                    </Title>
                </div>

                <Row gutter={[16, 16]} style={{ marginTop: '30px' }}>
                    <Col xs={3}>You</Col>
                    <Col xs={3}>Jane</Col>
                    <Col xs={18}></Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginBottom: '30px' }}>
                    <Col xs={3}>
                        <Radio.Group onChange={(e) => { setYourValue(e.target.value) }} value={yourValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}></Radio>
                                <Radio value={1}></Radio>
                                <Radio value={2}></Radio>
                                <Radio value={3}></Radio>
                                <Radio value={4}></Radio>
                            </Space>
                        </Radio.Group>
                    </Col>
                    <Col xs={21}>
                        <Radio.Group onChange={(e) => { setCoValue(e.target.value) }} value={coValue}>
                            <Space direction="vertical" align="start">
                                <Radio value={0}>Tax lien within the past 24 months</Radio>
                                <Radio value={1}>Foreclosure within past 24 months</Radio>
                                <Radio value={2}>Foreclosure within past 36 months </Radio>
                                <Radio value={3}>Foreclosure within past 48 months </Radio>
                                <Radio value={4}>Judgement</Radio>
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

export default CoLienJudgement;