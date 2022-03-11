import { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Radio, Space } from 'antd';
import { Typography } from 'antd';

const CoVeteran: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title } = Typography;

    const [yourValue, setYourValue] = useState(0)
    const [coValue, setCoValue] = useState(0)
    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col>
                <Title level={4}>
                    Let’s see if you qualify for special veteran programs.
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setYourValue(e.target.value) }} value={yourValue}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>I’m a Veteran</Radio>
                            <Radio value={1}>I’m Not a Veteran</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Title level={4}>
                    Is Jane a veteran?
                </Title>
                <div style={{ textAlign: 'center' }}>
                    <Radio.Group onChange={(e) => { setCoValue(e.target.value) }} value={coValue}>
                        <Space direction="vertical" align="start">
                            <Radio value={0}>Yes</Radio>
                            <Radio value={1}>No</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CoVeteran;