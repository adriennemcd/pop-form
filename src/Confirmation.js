import React, { Fragment } from 'react';
import confirmationMessages from './data/confirmationMessages.json';
import waitingListStatus from './data/waitingListStatus.json';
import schedules from './data/schedules.json';

function Confirmation(props) {
  const { division, link, inPersonEligible } = props.placement;
  const { ieTitle, ineligibility } = confirmationMessages.ineligible;
  const { title, eligibility1, eligibility2, schedule, inPerson, register } = confirmationMessages.eligible;
  const { wlTitle, wlEligibility1, wlEligibility2, message, CTA, wlLink } = confirmationMessages.waitingList;

  return (
    <div className='confirmation'>
      {!division &&
        <Fragment>
          <p className='confirmation__title'>{ieTitle}</p>
          <p className='confirmation__text'>{ineligibility} <a href='mailto: michael@playonphilly.org' target='_parent'>michael@playonphilly.org</a>.</p>
        </Fragment>
      }
      {division && !waitingListStatus[division] &&
        <Fragment>
          <p className='confirmation__title'>{title}</p>
          <p className='confirmation__text'>{eligibility1} <span className='confirmation__text confirmation__text--emphasis'>Division {division}</span> {eligibility2}.</p>
          <p className='confirmation__text'>{schedule}<br />
            <span className='confirmation__text confirmation__text--emphasis'>
              {schedules[division].days}<br />
              {schedules[division].time}
            </span>
          </p>
          {inPersonEligible &&
            <p className='confirmation__text'>{inPerson}</p>
          }
          <a href={link} target='_parent' className='confirmation__button'>{register}</a>
        </Fragment>
      }
      { division && waitingListStatus[division] &&
        <Fragment>
          <p className='confirmation__title'>{wlTitle}</p>
          <p className='confirmation__text'>{wlEligibility1} <span className='confirmation__text confirmation__text--emphasis'>Division {division}</span> {wlEligibility2}.</p>
          <p className='confirmation__text'>{message}</p>
          <a href={`${wlLink}`} target='_parent' className='confirmation__button'>{CTA}</a>
        </Fragment>
      }
    </div>
  );
}

export default Confirmation;