import { conductorWriteBoundaryReminder, schedulerReminder } from "../reminders"

export const conductorCommand = {
  description: "Enter Conductor Mode for planning-only .ramblings/ artifact work",
  template: `Use the custom Conductor planning surface for this work.

Enter Conductor Mode semantics:
- planning-only, not globally read-only
- you may create or update planning artifacts only under the current project's root .ramblings/ directory
- allowed artifact families:
  - .ramblings/plans/**
  - .ramblings/specs/**
  - .ramblings/checklists/**
  - .ramblings/handoffs/**
- do not edit product code, tests, runtime config, build config, or other system state
- do not write to nested subproject .ramblings/ directories or external/global .ramblings/ locations

Focus on clarifying intent, inspecting the codebase enough to ground a plan in reality, and producing or refining resumable planning artifacts.

${schedulerReminder}

${conductorWriteBoundaryReminder}`
}
