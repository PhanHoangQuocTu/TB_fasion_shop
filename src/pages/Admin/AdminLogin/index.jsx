import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './AdminLogin.module.scss'
function AdminLogin() {
    const { register, handleSubmit } = useForm({});
    const navigate = useNavigate()

    const handleData = async (url, data) => {
        const response = await axios.post(url, data);
        const result = await response.data;
        console.log(result);
        return result;
    };

    const handleLogin = async (values) => {
        console.log(values)
        try {
            const kq = await handleData("http://localhost:3001/api/auth/checkLogin", {
                username: values.username,
                password: values.password,
            });
            localStorage.setItem("user", JSON.stringify(kq));
            navigate("/admin");
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <form className={styles.formLogin} method="POST" onSubmit={handleSubmit(handleLogin)}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Login</h1>
                <div className={styles.form}>
                    <input className={styles.inputUsername} name='username' type="text" placeholder="Username" {...register("username")} />
                    <input className={styles.inputPassword} name='password' type="password" placeholder="Password" {...register("password")} />
                    <button className={styles.btnLogin} type="submit">
                        SIGN IN
                    </button>

                </div>
            </div>
        </form>
    );
}

export default AdminLogin;