import { Form, Button, Container } from 'react-bootstrap'

const SunglassesForm = (props) => {
    const { sunglasses, handleChange, handleSubmit, heading} = props
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form 
                    style={{width: '300px'}}
                    onSubmit={handleSubmit}
                >
                <Form.Label htmlFor="name">Sunglasses Brand</Form.Label>
                <Form.Control 
                    placeholder="Enter brand" 
                    value={sunglasses.brand}
                    name="brand"
                    id="brand"
                    onChange={handleChange}
                />
                <Form.Label htmlFor="frameColor">Frame color</Form.Label>
                <Form.Control 
                    placeholder="Enter frame's color"
                    value={sunglasses.frameColor}
                    name="frameColor"
                    id="frameColor"
                    onChange={handleChange}
                />
                <Form.Check
                    label="Are they polarized?"
                    name="isPolarized"
                    defaultChecked={ sunglasses.isPolarized }
                    onChange={handleChange}
                />
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default SunglassesForm
