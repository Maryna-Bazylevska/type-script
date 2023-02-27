import React, { useState } from "react";
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from "./Searchbar.styled";
type SearchbarProps = {
  onSubmit: (query: string) => void;
};
const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const [query, setQuery] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };
  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormInput type="text" value={query} onChange={handleChange} />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </SearchBarHeader>
  );
};
export default Searchbar;
