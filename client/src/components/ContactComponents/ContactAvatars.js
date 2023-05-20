import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";


function ContactAvatars() {
    return (
        <div className="container">
            <div>
                <h4>Reach us at <span><LinkedInIcon color="primary" /></span>:</h4>
            </div>
            <Stack className="row" direction="row" >
                <a className="col-md contact-avatar-a" href="https://www.linkedin.com/in/arup-kumar-mondal-ba64a61a6/" target="_blank">
                    <div className="card border-light bg-white">
                        <Avatar alt="Arup Kumar mondal (2019-23)" src="https://scontent.fccu15-1.fna.fbcdn.net/v/t39.30808-6/280606327_699916508011201_8099063833980220594_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VwcKvk5HI9UAX_wD2uF&_nc_ht=scontent.fccu15-1.fna&oh=00_AfCM0AR9BY2HJSTBTaoLcC16Jt19NoEDLdKUgog8msS_Jg&oe=6468346C" />
                        <p>Arup</p>
                    </div>
                </a>
                <a className="col-md contact-avatar-a" href="https://www.linkedin.com/in/jayanta-ghosh-a7a05325b/" target="_blank">
                    <div className="card border-light bg-white">
                        <Avatar alt="Jayanta Ghosh (2019-23)" src="https://scontent.fccu15-1.fna.fbcdn.net/v/t1.6435-9/139347560_415973002942077_1901744775989381779_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xos0IFgj-60AX9FTG-6&_nc_ht=scontent.fccu15-1.fna&oh=00_AfDrDL7pIVZCHjRzomjOuPQ83JKKhUrc9iKVUlmzfKSZ7g&oe=648B2999" />
                        <p>Jayanta</p>
                    </div>
                </a>

                <a className="col-md contact-avatar-a" href="https://www.linkedin.com/in/kriti39/" target="_blank">
                    <div className="card border-light bg-white">
                        <Avatar alt="Kritidipta Ghosh (2019-23)" src="https://media.licdn.com/dms/image/C4E03AQFjAzpoZQrgUA/profile-displayphoto-shrink_800_800/0/1634398276754?e=2147483647&v=beta&t=XMlTcqwPMWQn7eVwRgvwUWj3K29FcGayfoZ3-3W5uVk" />
                        <p>Kritidipta</p>
                    </div>
                </a>

                <a className="col-md contact-avatar-a" href="https://www.linkedin.com/in/maniklal-maity-19b5411b5/" target="_blank">
                    <div className="card border-light bg-white">
                        <Avatar alt="Maniklal Maity (2019-23)" src="https://media.licdn.com/dms/image/C4D03AQGHKqtQzSoibw/profile-displayphoto-shrink_800_800/0/1616949362423?e=1689811200&v=beta&t=irJhmi0CK4-S3uveQFuzLBCRg27mQzOz5gJm_DithuU" />
                        <p>Maniklal</p>
                    </div>
                </a>

            </Stack>
        </div>
    );
}

export default ContactAvatars;