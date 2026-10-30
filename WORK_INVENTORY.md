# Work inventory → portfolio mapping

Scanned: `C:\Gisul`, `C:\Users\Admin\Gisul`, `C:\Sarastra`  
Date: 2026-10-30

## Gisul — verified from git

| Area | Path | Evidence | Portfolio slot |
|------|------|----------|----------------|
| **Aaptor AIML assessment** | `C:\Gisul\Aaptor` | **75 commits** as `Ujwal Kulal` / `Ujwal1410` (`manojkulal78@gmail.com`): question gen/eval, RAG→VM, Qwen+OpenAI, notebooks, Docker aiml-service | Project 01 + Experience |
| **Live proctoring** | Same repo, branch `live-proctoring` (ahead 7) | Commits: Agora live proctoring, face-mismatch, capture image, violation logs, identity verification files, LiveKit token/room APIs (WIP) | Project 02 + Experience |
| **SeaweedFS prod** | `C:\Gisul\seaweedfs_prod_clean` | Commits under `gisul-ecosystem`: clean deploy, chunked uploads, 10GB+ files, 500MB limit patch, nginx/S3/CORS, GH Actions | Project 03 + Experience |
| **AIML agent service** | `C:\Gisul\aiml-agent-service` | Deploy workflows / soft-limit fixes (ecosystem author) | Mentioned in experience |
| **Aaptor Model docs** | `C:\Gisul\Aaptor Model` | Architecture/ops docs (Qwen2.5-7B, vLLM, 8 competencies) — supports narrative | Supporting context |
| Racko-cloud / racko-llm / racko-dr / voice-ai / Nexterm | Present locally | **No commits under Ujwal author/email** in these clones | Not claimed as primary ownership |

### Aaptor git status (local)
- Branch: `live-proctoring` tracking `origin/live-proctoring`, **ahead 7**
- Dirty: proctor LiveKit API routes + new `proctoring-admin-auth.ts`

## Sarastra — verified from git

| Project | Path | Evidence | Portfolio slot |
|---------|------|----------|----------------|
| **Bank voice kiosk** | `C:\Sarastra\voice-based-assistant` | 8 merge PRs as **Ujwal1410**; Kannada kiosk, Sarvam speech, forms | Project 04 |
| **Finsight** | `C:\Sarastra\finsight` | Repo under AkshithaKulal; OTP, multi-bank PDF parsing, UI polish | Project 05 |
| **Disease prediction** | `C:\Sarastra\disease-prediction-ml` | Initial GNN system commit | Project 06 |
| SilentTalk / ISLSignTalk / Listenly | Present | Authored mainly as AkshithaKulal | Optional / not primary |
| sarastra-learn | Monorepo scaffold | Initial commit only | Defer |
| Pathera / content_bot / autoscaling | Local folders | No/little git history | Defer |

## Intentionally not added
- Secrets / `vm-passwords.csv` / env files  
- Unverified revenue claims (removed `$50K+/mo` style line)  
- Projects with no Ujwal authorship signal (Racko*, Nexterm upstream, etc.)

## Suggested next steps
1. Add **case-study pages** (`/work/aaptor`, `/work/proctoring`, `/work/seaweedfs`) with architecture sketches  
2. Add **resume PDF** download  
3. Confirm which Finsight/SilentTalk demos should stay under your name vs family/shared accounts  
4. Push portfolio + finish LiveKit proctoring WIP on `live-proctoring`  
