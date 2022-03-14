import { useWizard } from 'react-use-wizard';
import { Button } from 'antd';

const Footer: React.FC = () => {
    const { nextStep, previousStep } = useWizard();

    return (
        <div style={{ display: "flex" }}>
            <Button onClick={() => previousStep()} ghost>Previous</Button>
            <Button type="primary" onClick={() => nextStep()} ghost>Next</Button>
        </div>
    );
};

export default Footer;
