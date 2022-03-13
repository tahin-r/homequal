import { useWizard } from 'react-use-wizard';
import { Button, Row, Col, Card } from 'antd';
import { RingProgress } from '@ant-design/plots';
import { Typography } from 'antd';

const DTIGraphPause: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title } = Typography;

    const config = {
        height: 100,
        width: 100,
        autoFit: true,
        percent: 0.6,
        color: ['#c04e4e', '#3a5e9c'],
        innerRadius: 0.75,
        radius: 1,
        statistic: {
            title: {
                style: {
                    color: '#3a5e9c',
                    fontSize: '12px',
                    lineHeight: '14px',
                },
            },
        },
        // #a8bade
        // #f2f2f2
    };

    // Attach an optional handler
    handleStep(() => {
    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    Dave, great news! Based on your information, your Debt to Income Ratio is ACCEPTABLE!
                </Title>
                <Card
                    title="Debt to Income Ratio"
                    style={{ width: 300, margin: 'auto', marginTop:'20px', marginBottom:'50px' }}
                    headStyle={{ backgroundColor: '#a8bade', textAlign: 'center', color: '#fff', fontSize: '16px' }}
                    bodyStyle={{ backgroundColor: '#f2f2f2' }}
                >
                    <RingProgress {...config} style={{ marginBottom: '20px' }} />
                    <Row>
                        <Col xs={12}>
                            <span>Monthly Income</span>
                        </Col>
                        <Col xs={8} style={{ backgroundColor: '#3a5e9c', textAlign: 'right', paddingRight: '5px' }}>
                            <span style={{ color: '#fff' }}>1565</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <span >Monthly Expenses</span>
                        </Col>
                        <Col xs={8} style={{ backgroundColor: '#c04e4e', textAlign: 'right', paddingRight: '5px' }}>
                            <span style={{ color: '#fff' }}>425</span>
                        </Col>
                    </Row>
                </Card>
                <div style={{ textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={() => nextStep()}
                        style={{
                            backgroundColor: '#ff1a8c',
                            width: '60%',
                            color: '#fff', borderColor: '#000', borderRadius: '5px', marginTop: '20px'
                        }}
                    >
                        Continue
                    </Button>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>

            </Col>
        </Row>
    )
}

export default DTIGraphPause;