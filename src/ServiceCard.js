import React from 'react';

class ServiceCard extends React.Component {
    
    handleButtonPress(address) {
        window.location.href=address;
    }

    render() {
        if (this.props.adminReq && !this.props.adminLogin) {
            return (
                <div>
                </div>
            );
        }

        var buttons = [];

        for (var i = 0; i < this.props.buttonDef.length; i++) {
            buttons.push(
                <a class="m-2 bg-green-600 hover:bg-green-500 shadow-md pb-1 pt-1 pl-3 pr-3 rounded-lg border-2 border-green-800 hover:ring-2 hover:ring-yellow-100 hover:ring-opacity-40" href={this.props.buttonDef[i][1]}>{this.props.buttonDef[i][0]}</a>
            );
        }

        return (
            <div class="flex-shrink flex-grow-0 m-8 pr-8 shadow-lg transition-all hover:pr-10 pl-8 hover:pl-10 pt-2 hover:pt-4 pb-4 hover:pb-6 rounded-xl border-2 border-gray-900 bg-gray-700">
                <div class="flex items-center">
                    <img class="max-h-16 max-w-16 m-4" src={this.props.svcLogo} alt={this.props.svcName} />
                    <h3 class="text-3xl font-bold text-yellow-300">{this.props.svcName}</h3>
                </div>
                <div>
                    {buttons}
                </div>
            </div>
        );
    }
}

export default ServiceCard;
