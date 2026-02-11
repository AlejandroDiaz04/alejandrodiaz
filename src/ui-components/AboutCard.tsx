import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <pre className="whoami-code">
        <span className="code-line">
          <span className="keyword">function</span>{" "}
          <span className="function-name">age</span>
          <span className="punctuation">(</span>
          <span className="param">date: Date</span>
          <span className="punctuation">)</span>{" "}
          <span className="punctuation">{"{"}</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="keyword">return</span>{" "}
          <span className="keyword">new</span> Date
          <span className="punctuation">()</span>
          <span className="punctuation">.</span>
          <span className="function-name">getFullYear</span>
          <span className="punctuation">()</span>{" "}
          <span className="operator">-</span>{" "}
          <span className="console">date</span>
          <span className="punctuation">.</span>
          <span className="function-name">getFullYear</span>
          <span className="punctuation">()</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="punctuation">{"}"}</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">name</span> <span className="operator">=</span>{" "}
          <span className="string">"Alejandro"</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">birthDate</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="keyword">new</span>{" "}
          <span className="class">Date</span>
          <span className="punctuation">(</span>
          <span className="string">"04-03-2003"</span>
          <span className="punctuation">)</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">languages</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="punctuation">[</span>
          <span className="string">"Spanish"</span>
          <span className="punctuation">,</span>{" "}
          <span className="string">"English"</span>
          <span className="punctuation">]</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="keyword">const</span>{" "}
          <span className="var">skills</span>{" "}
          <span className="operator">=</span>{" "}
          <span className="punctuation">[</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="string">
            "Python{" "}
            <svg
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.2-45.2 8-53.4 24.7-53.4 55.4v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                fill="currentColor"
              />
            </svg>
            "
          </span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="string">
            "TypeScript{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              className="icon"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M45,4h-40c-0.553,0 -1,0.448 -1,1v40c0,0.552 0.447,1 1,1h40c0.553,0 1,-0.448 1,-1v-40c0,-0.552 -0.447,-1 -1,-1zM29,26.445h-5v15.555h-4v-15.555h-5v-3.445h14zM30.121,41.112v-4.158c0,0 2.271,1.712 4.996,1.712c2.725,0 2.62,-1.782 2.62,-2.026c0,-2.586 -7.721,-2.586 -7.721,-8.315c0,-7.791 11.25,-4.717 11.25,-4.717l-0.14,3.704c0,0 -1.887,-1.258 -4.018,-1.258c-2.131,0 -2.9,1.013 -2.9,2.096c0,2.795 7.791,2.516 7.791,8.141c0.001,8.664 -11.878,4.821 -11.878,4.821z"></path>
                </g>
              </g>
            </svg>
            "
          </span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="string">
            "React{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0,0,256,256"
              className="icon"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M10.67969,4.18164c-0.611,0 -1.17769,0.13678 -1.67969,0.42578c-1.56887,0.90579 -2.16603,3.11312 -1.84961,5.86133c-2.53769,1.10008 -4.15039,2.71992 -4.15039,4.53125c0,1.81133 1.6127,3.43117 4.15039,4.53125c-0.31626,2.7481 0.28074,4.95554 1.84961,5.86133c0.501,0.289 1.06769,0.42578 1.67969,0.42578c1.30263,0 2.80816,-0.65377 4.32031,-1.77539c1.51228,1.12162 3.01964,1.77539 4.32227,1.77539c0.611,0 1.17769,-0.13678 1.67969,-0.42578c1.56886,-0.90579 2.16602,-3.11315 1.84961,-5.86133c2.53674,-1.10007 4.14844,-2.72031 4.14844,-4.53125c0,-1.81133 -1.6127,-3.43117 -4.15039,-4.53125c0.31626,-2.7481 -0.28074,-4.95554 -1.84961,-5.86133c-0.501,-0.29 -1.06769,-0.42578 -1.67969,-0.42578c-1.30263,0 -2.80816,0.65377 -4.32031,1.77539c-1.51224,-1.12162 -3.01814,-1.77539 -4.32031,-1.77539zM10.67969,5.93164c0.78163,0 1.81527,0.41561 2.9375,1.18555c-0.65982,0.62268 -1.30604,1.33074 -1.92774,2.11914c-1.00837,0.14459 -1.95911,0.35536 -2.83984,0.61914c-0.00473,-0.06108 -0.01593,-0.12517 -0.01953,-0.18555c-0.107,-1.78 0.28392,-3.10688 1.04492,-3.54687c0.225,-0.13 0.48769,-0.19141 0.80469,-0.19141zM19.32031,5.93164c0.316,0 0.57969,0.06141 0.80469,0.19141c0.761,0.439 1.15192,1.76687 1.04492,3.54688c-0.00363,0.06038 -0.01478,0.12447 -0.01953,0.18555c-0.88129,-0.26394 -1.83272,-0.47454 -2.8418,-0.61914c-0.62169,-0.78829 -1.26598,-1.49653 -1.92578,-2.11914c1.12215,-0.76981 2.15627,-1.18555 2.9375,-1.18555zM15,8.22852c0.27108,0.24674 0.54027,0.50752 0.8125,0.79297c-0.26978,-0.00906 -0.53813,-0.02148 -0.8125,-0.02148c-0.27371,0 -0.5414,0.01247 -0.81055,0.02148c0.27199,-0.28515 0.53972,-0.54647 0.81055,-0.79297zM15,10.75c0.82869,0 1.61413,0.04632 2.35938,0.12695c0.45449,0.61774 0.9024,1.27086 1.32227,1.99805c0.40243,0.69703 0.7583,1.41049 1.07227,2.125c-0.31401,0.71494 -0.66959,1.4295 -1.07227,2.12695c-0.41856,0.72509 -0.86536,1.374 -1.31836,1.99023c-0.77157,0.08442 -1.56306,0.13281 -2.36328,0.13281c-0.82869,0 -1.61413,-0.04632 -2.35937,-0.12695c-0.45449,-0.61774 -0.9024,-1.26891 -1.32227,-1.99609c-0.40267,-0.69745 -0.75816,-1.41201 -1.07226,-2.12695c0.31388,-0.71451 0.66983,-1.42797 1.07226,-2.125c0.41872,-0.72509 0.86525,-1.37595 1.31836,-1.99219c0.77157,-0.08442 1.56306,-0.13281 2.36328,-0.13281zM19.74609,11.29102c0.39675,0.09579 0.77816,0.19919 1.13672,0.31445c-0.08123,0.36705 -0.18058,0.74114 -0.29297,1.11914c-0.12868,-0.24147 -0.25347,-0.48371 -0.39258,-0.72461c-0.14313,-0.2478 -0.30202,-0.47044 -0.45117,-0.70898zM10.25195,11.29297c-0.14865,0.23781 -0.30655,0.46002 -0.44922,0.70703c-0.13907,0.24094 -0.26394,0.48311 -0.39258,0.72461c-0.11265,-0.37878 -0.21361,-0.75331 -0.29492,-1.12109c0.36514,-0.11537 0.7456,-0.21753 1.13672,-0.31055zM7.46875,12.24609c0.2107,0.88962 0.50298,1.81182 0.87891,2.75195c-0.37513,0.9379 -0.66618,1.85841 -0.87695,2.74609c-1.74147,-0.84094 -2.7207,-1.88777 -2.7207,-2.74414c0,-0.879 0.95188,-1.88073 2.54688,-2.67773c0.05444,-0.02724 0.11625,-0.04957 0.17188,-0.07617zM22.5293,12.25586c1.74147,0.84094 2.7207,1.88777 2.7207,2.74414c0,0.879 -0.95188,1.88073 -2.54687,2.67773c-0.05444,0.02723 -0.11625,0.04957 -0.17187,0.07617c-0.21082,-0.89014 -0.50071,-1.81321 -0.87695,-2.75391c0.37468,-0.93709 0.66441,-1.8572 0.875,-2.74414zM15,13c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM9.41016,17.27539c0.12872,0.24156 0.25537,0.48362 0.39453,0.72461c0.14297,0.24762 0.30023,0.47061 0.44922,0.70898c-0.39675,-0.09579 -0.77816,-0.19919 -1.13672,-0.31445c0.08129,-0.36728 0.18048,-0.7409 0.29297,-1.11914zM20.58984,17.27734c0.11252,0.37842 0.21367,0.75171 0.29492,1.11914c-0.36514,0.11537 -0.7456,0.21753 -1.13672,0.31055c0.14865,-0.23781 0.30655,-0.46002 0.44922,-0.70703c0.13878,-0.24044 0.26418,-0.48166 0.39258,-0.72266zM8.84961,20.14453c0.88129,0.26394 1.83272,0.47454 2.8418,0.61914c0.62188,0.78867 1.26568,1.49826 1.92578,2.12109c-1.12215,0.76972 -2.15592,1.18555 -2.9375,1.18555c-0.316,0 -0.57969,-0.06336 -0.80469,-0.19336c-0.761,-0.439 -1.15192,-1.76492 -1.04492,-3.54492c0.00366,-0.06101 0.01472,-0.12578 0.01953,-0.1875zM21.15039,20.14453c0.00479,0.06172 0.01589,0.12649 0.01953,0.1875c0.107,1.78 -0.28392,3.10492 -1.04492,3.54492c-0.225,0.13 -0.48769,0.19336 -0.80469,0.19336c-0.78158,0 -1.81535,-0.4157 -2.9375,-1.18555c0.66015,-0.6229 1.30573,-1.33231 1.92773,-2.12109c1.00837,-0.14459 1.95911,-0.35536 2.83984,-0.61914zM14.1875,20.97852c0.26978,0.00906 0.53813,0.02148 0.8125,0.02148c0.27437,0 0.54272,-0.01242 0.8125,-0.02148c-0.27223,0.28545 -0.54142,0.54625 -0.8125,0.79297c-0.27108,-0.24674 -0.54027,-0.50752 -0.8125,-0.79297z"></path>
                </g>
              </g>
            </svg>
            "
          </span>
          <span className="punctuation">,</span>
          <span className="code-line">
            {"  "}
            <span className="string">
              "Java{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                className="icon"
              >
                <g fill="#ffffff">
                  <g transform="scale(5.12,5.12)">
                    <path d="M28.1875,-0.00391c2.75,6.36328 -9.86719,10.29297 -11.03516,15.59766c-1.07812,4.86719 7.48828,10.52734 7.49219,10.52734c-1.30078,-2.01562 -2.24219,-3.67969 -3.54687,-6.81641c-2.20703,-5.30469 13.43359,-10.10156 7.08984,-19.30859zM36.55078,8.8125c0,0 -11.04687,0.69922 -11.60937,7.76953c-0.25,3.14844 2.90234,4.82813 2.99609,7.12109c0.07031,1.86719 -1.88672,3.42578 -1.88672,3.42578c0,0 3.55078,-0.66797 4.66406,-3.52344c1.23047,-3.16797 -2.38672,-5.33203 -2.02344,-7.86719c0.35156,-2.42578 7.85938,-6.92578 7.85938,-6.92578zM39.23047,25.14453c-1.15625,-0.05078 -2.44141,0.33203 -3.60547,1.16797c2.28125,-0.48828 4.21094,0.90625 4.21094,2.51563c0,3.625 -5.23828,7.05078 -5.23828,7.05078c0,0 8.10938,-0.92578 8.10938,-6.87891c0,-2.46094 -1.55469,-3.76562 -3.47656,-3.85547zM19.18359,25.15234c0,0 -10.12109,-0.13672 -10.12109,2.72656c0,2.99219 13.25391,3.20313 22.71875,1.35938c0,0 2.52734,-1.73047 3.19922,-2.375c-6.20312,1.26563 -20.35937,1.43359 -20.35937,0.33984c0,-1.01172 4.5625,-2.05078 4.5625,-2.05078zM16.73828,30.72266c-1.55078,0 -3.86719,1.19922 -3.86719,2.35547c0,2.32422 11.69141,4.11719 20.34766,0.71875l-2.99609,-1.83594c-5.86719,1.87891 -16.68359,1.27734 -13.48437,-1.23828zM18.17969,35.92188c-2.12891,0 -3.50781,1.3125 -3.50781,2.28125c0,2.98438 12.70703,3.28516 17.74219,0.25l-3.19922,-2.03516c-3.76172,1.58984 -13.20703,1.80469 -11.03516,-0.49609zM11.08984,38.625c-3.46875,-0.07031 -5.72266,1.48828 -5.72266,2.78125c-0.00391,6.875 35.52344,6.54297 35.52344,-0.48437c0,-1.16406 -1.375,-1.71875 -1.87109,-1.98437c2.90234,6.71875 -29.05078,6.19922 -29.05078,2.23438c0,-0.90234 2.34375,-1.78906 4.52344,-1.36328l-1.84766,-1.05078c-0.54297,-0.08203 -1.0625,-0.125 -1.55469,-0.13281zM44.63672,43.25c-5.40234,5.11719 -19.08984,6.98438 -32.85547,3.82422c13.76172,5.62891 32.78516,2.46094 32.85547,-3.82422z"></path>
                  </g>
                </g>
              </svg>
              "
            </span>
            <span className="punctuation">,</span>
          </span>
        </span>
        <span className="code-line">
          <span className="punctuation">]</span>
          <span className="punctuation">;</span>
        </span>
        <span className="code-line">
          <span className="console">console</span>
          <span className="punctuation">.</span>
          <span className="function-name">log</span>
          <span className="punctuation">(</span>
          <span className="punctuation">{"{"}</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">name</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">birthDate</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">age</span>
          <span className="punctuation">:</span>{" "}
          <span className="function-name">age</span>
          <span className="punctuation">(</span>
          <span className="var">birthDate</span>
          <span className="punctuation">)</span>
          <span className="punctuation">,</span>{" "}
          <span className="comment">// 22</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">languages</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          {"  "}
          <span className="var">skills</span>
          <span className="punctuation">,</span>
        </span>
        <span className="code-line">
          <span className="punctuation">{"}"}</span>
          <span className="punctuation">)</span>
          <span className="punctuation">;</span>
        </span>
      </pre>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .whoami-code {
    background: #121317;
    color: #e6e6e6;
    font-family: "Fira Mono", "Consolas", monospace;
    font-size: 1.12em;
    border-radius: 14px;
    padding: 2.2em 0 2.2em 4.4em;
    margin: 2.5em auto;
    max-width: 800px;
    overflow-x: auto;
    box-shadow:
      0 6px 28px rgba(0, 0, 0, 0.2),
      0 1.5px 0 #191a1f inset;
    border: 1.5px solid #181a20;
    position: relative;
    counter-reset: code-line;
    line-height: 1.55;
  }

  .whoami-code span.code-line {
    display: block;
    padding: 0;
    margin: 0;
    position: relative;
    min-height: 1.45em;
    white-space: pre;
  }

  .whoami-code span.code-line::before {
    counter-increment: code-line;
    content: counter(code-line);
    position: absolute;
    left: -3.2em;
    width: 2.4em;
    text-align: right;
    color: #3a3d4a;
    font-size: 0.99em;
    font-family: inherit;
    border-right: 1.5px solid #22232a;
    padding-right: 0.6em;
    user-select: none;
    transition: color 0.17s;
  }

  .whoami-code span.code-line:hover::before {
    color: #7dd3fc;
  }

  .function-name {
    color: #6ddcff;
  }
  .var {
    color: #e2777a;
  }
  .string {
    color: #fcd66d;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;
  }
  .class {
    color: #6ddcff;
  }
  .comment {
    color: #697098;
    font-style: italic;
  }
  .param {
    color: #e1e1e6;
  }

  .icon {
    vertical-align: middle;
    width: 22px;
    height: 22px;
    margin-left: 0.3em;
    margin-right: 0.2em;
    filter: drop-shadow(0 1px 3px #1116);
    color: #43fe97;
    background: transparent;
    border-radius: 4px;
    transition:
      opacity 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
      color 0.18s ease;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 110%;
    transform: translateY(-50%) scale(0.9);
    z-index: 10;
  }

  .string:hover .icon,
  .string:focus .icon {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(-50%) scale(1.08);
    color: #ffffff;
  }

  .string:hover,
  .string:focus {
    color: #f9b572;
    background: rgba(36, 40, 46, 0.28);
    border-radius: 6px;
    transition:
      background 0.2s,
      color 0.2s;
  }

  @media (max-width: 600px) {
    .whoami-code {
      padding: 1.1em 0 1.1em 2.4em;
      font-size: 1em;
      border-radius: 8px;
      margin: 1em auto;
      max-width: 95%;
      width: 100%;
      box-sizing: border-box;
      overflow-x: auto;
    }
    .icon {
      width: 18px;
      height: 18px;
      left: 104%;
    }
  }

  @media (max-width: 400px) {
    .whoami-code {
      padding: 0.8em 0 0.8em 1.8em;
      font-size: 0.85em;
      border-radius: 6px;
      margin: 0.8em auto;
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    .whoami-code span.code-line::before {
      left: -2.4em;
      width: 1.8em;
      font-size: 0.85em;
    }

    .icon {
      width: 16px;
      height: 16px;
      margin-left: 0.2em;
      margin-right: 0.1em;
    }
  }
  .keyword {
    color: rgb(254, 67, 95);
    font-weight: bold;
  }
  .function-name {
    color: #9a8fff;
  }
  .var {
    color: rgba(255, 255, 255, 0.9);
  }
  .string {
    color: #43fe97;
    position: relative;
    cursor: pointer;
    transition: color 0.2s;
  }
  .class {
    color: #5643fe;
  }
  .comment {
    color: #697098;
    font-style: italic;
  }
  .param {
    color: #e1e1e6;
  }
  .operator {
    color: #fefe43;
  }
  .punctuation {
    color: #727272;
  }
  .console {
    color: #fe9a43;
  }
`;

export default Card;
