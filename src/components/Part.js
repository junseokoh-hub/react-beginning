import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './Part.module.css';
function Part({id,coverImg,title,summary,genres}) {
    return (
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie__img}/>
            <div>
                <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
                <p>{summary.length > 500 ? `${summary.slice(0,200)}...`:summary}</p>
                <ul className={styles.movie__genres}>
                    {genres.map((genre)=><li key={genre}>{genre}</li>)}
                </ul>
            </div>
        </div>
    )
}

Part.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Part;