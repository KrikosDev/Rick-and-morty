import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const getQueryStringFromObject = (filter) => {
  return new URLSearchParams(filter).toString();
};

const getObjectFromQueryString = (search) => {
  const paramsEntries = new URLSearchParams(search).entries();

  return Object.fromEntries(paramsEntries);
};

export const useFilterQuery = () => {
  const { search } = useLocation();
  const history = useNavigate();

  const filter = useMemo(() => getObjectFromQueryString(search), [search]);

  const setSearchQuery = (filter) => {
    const search = getQueryStringFromObject(filter).toString();

    history({ search }, { replace: true });
  };

  const сhangeFilter = (fieldName, value) => {
    const newFilter = { ...filter, [fieldName]: value };
    if (!value) {
      delete newFilter[fieldName];
    } else if (fieldName !== 'page') {
      delete newFilter.page;
    }

    setSearchQuery(newFilter);
  };

  const сlearFilter = (value) => {
    if (value === 'type') {
      const newFilter = { ...filter };
      delete newFilter[value];

      setSearchQuery(newFilter);
    } else {
      setSearchQuery({ page: filter.page });
    }
  };

  return [filter, сhangeFilter, сlearFilter];
};
