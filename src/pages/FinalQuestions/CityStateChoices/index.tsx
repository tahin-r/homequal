import { useWizard } from 'react-use-wizard';
import { Button, Row, Col } from 'antd';
import { Typography } from 'antd';

const CityStateChoices: React.FC = () => {
    const { handleStep, nextStep, previousStep } = useWizard();
    const { Title, Text } = Typography;

    // Attach an optional handler
    handleStep(() => {

    });

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col style={{ padding: '30px' }}>
                <Title level={4}>
                    And finally, where would you like to live? A major part of your mortgage payment is taxes. By providing a general area, we can calculate your taxes!
                </Title>
                {/* options */}
                <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <div>Option 1</div>
                    <input placeholder='Enter City' style={{ marginTop: '10px', width: '60%' }}></input>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <div>Option 2</div>
                    <input placeholder='Enter City' style={{ marginTop: '10px', width: '60%' }}></input>
                </div>
                <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                    <div>Option 3</div>
                    <input placeholder='Enter City' style={{ marginTop: '10px', width: '60%' }}></input>
                </div>
                <div>
                    <Text italic>
                        Provide at least one location.  You can change this later no worries.
                    </Text>
                </div>
                <Button onClick={() => previousStep()}>Previous</Button>
                <Button onClick={() => nextStep()}>Next</Button>
            </Col>
        </Row>
    )
}

export default CityStateChoices;