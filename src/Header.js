import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.login(false, this.props.adminLoggedIn);
    }

    render() {
        return (
            <div>
                <div class="relative">
                    <h1 class="text-5xl text-yellow-200 mb-3 ml-2 mt-1">BSMedia.xyz</h1>
                    {!this.props.adminLogin && 
                        <button class="absolute right-3 top-4 text-yellow-200" onClick={() => this.login(true, this.props.adminLoggedIn)}>Login</button>
                    }
                </div>
                <hr class="border-black border" />
            </div>
        );
    }

    login(redir, adminLoggedIn) {
        fetch("https://auth.bsmedia.xyz/api/state", {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include'
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            if (json.data.username !== "") {
                adminLoggedIn();
                console.info("Authenticated");
            } else if (redir) {
                console.info("Redirecting redir=" + redir);
                window.location.href="https://auth.bsmedia.xyz/?rd=https%3A%2F%2Fbsmedia.xyz%2F&rm=GET";
            }
        })
        .then(function(err) {
            console.warn("Error: ", err);
        });
    }
}

export default Header;
