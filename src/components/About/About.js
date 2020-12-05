import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { HtmlTooltip, useStyles } from './AboutStyles';

export default function About({ lang }) {
    const classes = useStyles();

    return (
        <>
            {lang === 'ru' ? (
                <div>
                    <p>
                        <strong>BC Portfolio</strong> – полностью бесплатное, анонимное приложение с{' '}
                        <a
                            className="ext"
                            href="https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B5_%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            открытым исходным кодом (wiki)
                        </a>{' '}
                        для отслеживания и анализа своих крипто активов со всех криптовалютных бирж и кошельков.
                    </p>
                    <p>
                        <strong>BC Portfolio</strong> не собирает и не хранит какую либо информацию своих пользователей. Вся
                        необходимая для работы приложения информация хранится в приложении{' '}
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>{' '}
                        и памяти браузера пользователя. Передача данных осуществляется по защищенному протоколу{' '}
                        <a
                            className="ext"
                            href="https://ru.wikipedia.org/wiki/HTTPS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https (wiki).
                        </a>
                    </p>
                    <div>Возможности приложения:</div>
                    <ul>
                        <li>
                            Отображение изменения стоимости актива в реальном времени{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение стоимости актива с учетом комиссий{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Рекомендации на покупку или продажу{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение названия кошелька на котором хранится актив{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Отображение общей стоимости портфеля{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Сводная диаграмма крипто активов{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Конвертация цен в популярные фиатные валюты{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Возможность поделиться ссылкой на свой портфель{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Кнопка удаление всех данных приложения из браузера{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                    </ul>
                    <p>
                        Для начала работы приложения необходимо создать таблицу{' '}
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>{' '}
                        с 7 колонками: Title, Quantity, Price, Buyfee, Sellfee, Wallet, Data{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>{' '}
                        и открыть доступ к таблице по ссылке{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>
                        . После добавления ссылки на таблицу{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>
                        , изменения в таблице будут отображаться в приложении.
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://blogcrypto.info/ru/guides/rukovodstvo-polzovatelya-prilozheniya-blogcrypto-portfolio"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Подробное руководство
                        </a>
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Пример таблицы
                        </a>
                    </p>
                    <p>
                        Код приложения на{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.git}
                            href="https://github.com/blogcrypto/portfolio"
                        >
                            GitHub{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className={classes.gitLogo}
                                style={{ color: '#fff' }}
                            >
                                <path
                                    fill="#777"
                                    d="M16,0.7c-8.8,0-16,7.2-16,16c0,7.2,4.6,13.2,11.2,15.2l9.8-0.1c6.5-2,11-8,11-15.2C32,7.9,24.8,0.7,16,0.7z"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-arm"
                                    d="M12.2,28.5c-4.5,1-5.5-1.9-5.5-1.9c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.3"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-body"
                                    d="M11,32c0,0,1-0.4,1-0.8l0-5.3c0.2-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8c0-1.8,0.6-3.2,1.7-4.4C7.1,10.9,6.6,9.2,7.5,7c0,0,1.4-0.4,4.5,1.6c1.3-0.4,2.7-0.5,4.1-0.6c1.4,0,2.8,0.2,4.1,0.6c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1.1,1.2,1.7,2.6,1.7,4.4c0,6.2-3.8,7.6-7.4,8.1c0.6,0.5,1.1,1.5,1.1,3l0,4.4c0,0.5,1.1,0.9,1.2,0.9L11,32z"
                                />
                            </svg>
                        </a>
                    </p>
                </div>
            ) : (
                <div>
                    <p>
                        <strong>BC Portfolio</strong> is a completely free,{' '}
                        <a
                            className="ext"
                            href="https://en.wikipedia.org/wiki/Open-source_software"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            open source (wiki)
                        </a>{' '}
                        anonymous application for tracking and analyzing your crypto assets from all crypto exchanges
                        and wallets.
                    </p>
                    <p>
                        <strong>BC Portfolio</strong> does not collect or store any information from its users. All information
                        necessary for the application to work is stored in the{' '}
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>{' '}
                        application and in the user`s browser memory. Data transfer is carried out using the secure{' '}
                        <a
                            className="ext"
                            href="https://en.wikipedia.org/wiki/HTTPS"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https (wiki)
                        </a>{' '}
                        protocol.
                    </p>
                    <div>Application features:</div>
                    <ul>
                        <li>
                            Displaying the change in the value of an asset in real time{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Display of asset value including commissions{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Recommendations for buying or selling{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Displaying the name of the wallet where the asset is stored{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Displaying the total portfolio value{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Crypto Assets Summary Chart{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Converting prices to popular fiat currencies{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Ability to share a link to your portfolio{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                        <li>
                            Button to delete all application data from the browser{' '}
                            <HtmlTooltip
                                placement="top"
                                arrow
                                title={
                                    <img
                                        className={classes.img}
                                        src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png"
                                        alt="Table"
                                    />
                                }
                            >
                                <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                            </HtmlTooltip>
                        </li>
                    </ul>
                    <p>
                        To start the application, you need to create a Google Spreadsheets{' '}
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Spreadsheets
                        </a>{' '}
                        with 7 columns: Title, Quantity, Price, Buyfee, Sellfee, Wallet, Data{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>{' '}
                        and open access by link{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>
                        . After adding the link to the spreadsheet{' '}
                        <HtmlTooltip
                            placement="top"
                            arrow
                            title={
                                <img className={classes.img} src="https://blogcrypto.info/public/favicon/android-chrome-512x512.png" alt="Table" />
                            }
                        >
                            <InfoOutlinedIcon className={classes.toggleTooltip} color="primary" />
                        </HtmlTooltip>
                        , changes in the spreadsheet will be reflected in the application.
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://blogcrypto.info/guides/blogcrypto-portfolio-app-user-guide"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Guide
                        </a>
                    </p>
                    <p>
                        <a
                            className="ext"
                            href="https://docs.google.com/spreadsheets/d/12aYS3GD7r4IFt92GYBvs_N5h9alE57a2FWxwdOnP_ik/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Example table
                        </a>
                    </p>
                    <p>
                        Code on GitHub{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.git}
                            href="https://github.com/blogcrypto/portfolio"
                        >
                            GitHub{' '}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className={classes.gitLogo}
                                style={{ color: '#fff' }}
                            >
                                <path
                                    fill="#777"
                                    d="M16,0.7c-8.8,0-16,7.2-16,16c0,7.2,4.6,13.2,11.2,15.2l9.8-0.1c6.5-2,11-8,11-15.2C32,7.9,24.8,0.7,16,0.7z"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-arm"
                                    d="M12.2,28.5c-4.5,1-5.5-1.9-5.5-1.9c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.3"
                                />
                                <path
                                    fill="currentColor"
                                    className="octo-body"
                                    d="M11,32c0,0,1-0.4,1-0.8l0-5.3c0.2-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8c0-1.8,0.6-3.2,1.7-4.4C7.1,10.9,6.6,9.2,7.5,7c0,0,1.4-0.4,4.5,1.6c1.3-0.4,2.7-0.5,4.1-0.6c1.4,0,2.8,0.2,4.1,0.6c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1.1,1.2,1.7,2.6,1.7,4.4c0,6.2-3.8,7.6-7.4,8.1c0.6,0.5,1.1,1.5,1.1,3l0,4.4c0,0.5,1.1,0.9,1.2,0.9L11,32z"
                                />
                            </svg>
                        </a>
                    </p>
                </div>
            )}
        </>
    );
}
