import { useState } from 'react';
import styles from './index.module.scss';
//
import CountDown from 'components/CountDown';

interface IProps {
  isShow: boolean;
  onClose: Function;
}

const Login = (props: IProps) => {
  const { isShow = false } = props;
  const [isShowVerifyCode, setIsShowVerifyCode] = useState(false);
  const [form, setForm] = useState({
    phone: '',
    verify: '',
  });

  const handleGetVerifyCode = () => {
    setIsShowVerifyCode(true);
  };

  const handleLogin = () => {};

  const handleOAuthGithub = () => {};

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleCountDownEnd = () => {
    setIsShowVerifyCode(false);
    console.log('end');
  };

  return isShow ? (
    <div className={styles.loginArea}>
      <div className={styles.loginBox}>
        <div className={styles.loginTitle}>
          <div>Login with mobile</div>
          <div className={styles.close}>x</div>
        </div>
        <input
          type="text"
          name="phone"
          placeholder="Please enter your mobile"
          value={form.phone}
          onChange={handleFormChange}
        />
        <div className={styles.verifyCodeArea}>
          <input
            type="text"
            name="verify"
            placeholder="Please enter verify code"
            value={form.verify}
            onChange={handleFormChange}
          />
          <span className={styles.verifyCode} onClick={handleGetVerifyCode}>
            {isShowVerifyCode ? (
              <CountDown time={10} onEnd={handleCountDownEnd} />
            ) : (
              'code'
            )}
          </span>
        </div>
        <div className={styles.loginBtn} onClick={handleLogin}>
          Login
        </div>
        <div className={styles.otherLogin} onClick={handleOAuthGithub}>
          Login with Github
        </div>
        <div className={styles.loginPrivacy}>
          Read & agree this&nbsp;
          <a href="https://github.com/jrhe123" rel="noreferrer" target="_blank">
            policy
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
