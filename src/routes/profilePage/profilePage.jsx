import "./profilePage.scss"
import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
function ProfilePage(){
    return (
        <div className="profilePage">ProfilePage
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar : <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></span>
                    <span>Username : <b> raj</b></span>
                    <span>Email : raj@mail</span>
                </div>
                <div className="title">
                    <h1>MY list</h1>
                    <button>Create new post</button>
                </div>
                <List />

                <List />

                <div className="title">
                    <h1>Saved list</h1>
                    
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
        
        </div>
    )
}
export default ProfilePage;