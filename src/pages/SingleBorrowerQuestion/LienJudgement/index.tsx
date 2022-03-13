import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const LienJudgement: React.FC = () => {
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
                    You said you had a tax lien, judgement or foreclosure.
                </Title>
                <Title level={4}>
                    Please check all that apply.
                </Title>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                    <Radio.Group onChange={(e) => { setValue(e.target.value); nextStep() }} value={value}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Tax lien within the past 24 months</Radio>
                            <Radio value={1}>Foreclosure within past 24 months</Radio>
                            <Radio value={2}>Foreclosure within past 36 months </Radio>
                            <Radio value={2}>Foreclosure within past 48 months </Radio>
                            <Radio value={2}>Judgement</Radio>
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

export default LienJudgement;