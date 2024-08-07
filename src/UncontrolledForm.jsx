export function UncontrolledForm() {
    function onLogin(event) {
        event.preventDefault();
        const form = event.target.form;

        const data = {
            username: form.elements.username.value,
            password: form.elements.password.value,
            remember: form.elements.remember.checked,
        };

        console.log('onLogin:', data);
    }

    function loginWithFormData(event) {
        event.preventDefault();
        const formData = new FormData(event.target.form);

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember: formData.get('remember') === 'on' ? true : false,
        };

        console.log('loginWithFormData:', data);
    }

    return (
        <form>
            <h3>Login Non Controllato</h3>
            <input name="username"/>
            <input name="password" type="password"/>
            <label><input name="remember" type="checkbox" />Remember me</label>
            <button onClick={onLogin}>Login</button>
            <button onClick={loginWithFormData}>Login con FormData</button>
            <button type="reset">Reset</button>
        </form>
    );
}
