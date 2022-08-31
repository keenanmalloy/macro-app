import React from "react";

export const AgeForm = ({ step, setStep }) => {
  return (
    <div>
      <form>
        <h2 className="font-bold text-3xl p-2">When were you born?</h2>
        <p className="p-2 leading-snug">
          Select the year, month, and day you were born.
        </p>
        <div className="space-x-5 flex items-center justify-center fixed right-0 left-0 top-0 bottom-0 ">
          <input
            className=" border-2 rounded-xl w-20 py-4 border-slate-500 text-center "
            type="number"
            list="year"
            placeholder="Year"
          />
          <datalist id="year">
            <option value="2022"></option>
            <option value="2021"></option>
            <option value="2020"></option>
            <option value="2019"></option>
            <option value="2018"></option>
            <option value="2017"></option>
            <option value="2016"></option>
            <option value="2015"></option>
            <option value="2014"></option>
            <option value="2013"></option>
            <option value="2012"></option>
            <option value="2011"></option>
            <option value="2010"></option>
            <option value="2009"></option>
            <option value="2008"></option>
            <option value="2007"></option>
            <option value="2006"></option>
            <option value="2005"></option>
            <option value="2004"></option>
            <option value="2003"></option>
            <option value="2002"></option>
            <option value="2001"></option>
            <option value="2000"></option>
            <option value="1999"></option>
            <option value="1998"></option>
            <option value="1997"></option>
            <option value="1996"></option>
            <option value="1995"></option>
            <option value="1994"></option>
            <option value="1993"></option>
            <option value="1992"></option>
            <option value="1991"></option>
            <option value="1990"></option>
            <option value="1989"></option>
            <option value="1988"></option>
            <option value="1987"></option>
            <option value="1986"></option>
            <option value="1985"></option>
            <option value="1984"></option>
            <option value="1983"></option>
            <option value="1982"></option>
            <option value="1981"></option>
            <option value="1980"></option>
            <option value="1979"></option>
            <option value="1978"></option>
            <option value="1977"></option>
            <option value="1976"></option>
            <option value="1975"></option>
            <option value="1974"></option>
            <option value="1973"></option>
            <option value="1972"></option>
            <option value="1971"></option>
            <option value="1970"></option>
            <option value="1969"></option>
            <option value="1968"></option>
            <option value="1967"></option>
            <option value="1966"></option>
            <option value="1965"></option>
            <option value="1964"></option>
            <option value="1963"></option>
            <option value="1962"></option>
            <option value="1961"></option>
            <option value="1960"></option>
            <option value="1959"></option>
            <option value="1958"></option>
            <option value="1957"></option>
            <option value="1956"></option>
            <option value="1955"></option>
            <option value="1954"></option>
            <option value="1953"></option>
            <option value="1952"></option>
            <option value="1951"></option>
            <option value="1950"></option>
            <option value="1949"></option>
            <option value="1948"></option>
            <option value="1947"></option>
            <option value="1946"></option>
            <option value="1945"></option>
            <option value="1944"></option>
            <option value="1943"></option>
            <option value="1942"></option>
            <option value="1941"></option>
            <option value="1940"></option>
            <option value="1939"></option>
            <option value="1938"></option>
            <option value="1937"></option>
            <option value="1936"></option>
            <option value="1935"></option>
            <option value="1934"></option>
            <option value="1933"></option>
            <option value="1932"></option>
            <option value="1931"></option>
            <option value="1930"></option>
            <option value="1929"></option>
            <option value="1928"></option>
            <option value="1927"></option>
            <option value="1926"></option>
            <option value="1925"></option>
            <option value="1924"></option>
            <option value="1923"></option>
            <option value="1922"></option>
            <option value="1921"></option>
            <option value="1920"></option>
            <option value="1919"></option>
            <option value="1918"></option>
            <option value="1917"></option>
            <option value="1916"></option>
            <option value="1915"></option>
            <option value="1914"></option>
            <option value="1913"></option>
            <option value="1912"></option>
            <option value="1911"></option>
            <option value="1910"></option>
            <option value="1909"></option>
            <option value="1908"></option>
            <option value="1907"></option>
            <option value="1906"></option>
            <option value="1905"></option>
            <option value="1904"></option>
            <option value="1903"></option>
            <option value="1902"></option>
            <option value="1901"></option>
            <option value="1900"></option>
          </datalist>
          <input
            className=" border-2 rounded-xl w-20 py-4 border-slate-600 text-center "
            type="text"
            list="month"
            placeholder="Month"
          />
          <datalist id="month">
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </datalist>
          <input
            className=" border-2 rounded-xl w-20 py-4 border-slate-600 text-center "
            type="number"
            list="day"
            placeholder="Day"
          />
          <datalist id="day">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
            <option value="8"></option>
            <option value="9"></option>
            <option value="10"></option>
            <option value="11"></option>
            <option value="12"></option>
            <option value="13"></option>
            <option value="14"></option>
            <option value="15"></option>
            <option value="16"></option>
            <option value="17"></option>
            <option value="18"></option>
            <option value="19"></option>
            <option value="20"></option>
            <option value="21"></option>
            <option value="22"></option>
            <option value="23"></option>
            <option value="24"></option>
            <option value="25"></option>
            <option value="26"></option>
            <option value="27"></option>
            <option value="28"></option>
            <option value="29"></option>
            <option value="30"></option>
            <option value="31"></option>
          </datalist>
        </div>
      </form>
    </div>
  );
};
