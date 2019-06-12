import React, { Component } from 'react'

const WizardContext = React.createContext()

class WizardProvider extends Component {
    constructor(){
        super()
        this.state = {
            wizards: []
        }
    }

    saveNewWizard = newWizard => {
        this.setState(prevState => ({
            wizards: [...prevState.wizards, newWizard]
        }))
    }

    render() {
        return (
            <WizardContext.Provider 
                value={{ 
                    ...this.state, 
                    saveNewWizard: this.saveNewWizard
                }}>
                { this.props.children }
            </WizardContext.Provider>
        )
    }
}

export default WizardProvider

export const withWizard = C => props => (
    <WizardContext.Consumer>
        { value => <C {...value} {...props}/>}
    </WizardContext.Consumer>
)